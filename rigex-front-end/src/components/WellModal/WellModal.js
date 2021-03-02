import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

import { wellActions } from '../../store/wells/action';
import { UPSERT_WELL } from '../../constants/serviceAPI';
import { latLongRegExTest } from '../../constants/regexTests';
import radioActive from '../../assets/radio-active.png';
import radioInactive from '../../assets/radio-inactive.png';
import './wellModalStyles.scss';

export default function WellModal({
  wellModalInfo: {
    type,
    isOpen,
    currentName,
    currentLatitude,
    currentLongitude,
    currentStatus,
    id,
  },
  handleWellModalClose,
  rigId,
  checkForDrilling,
}) {
  const [wellInfo, setWellInfo] = useState({
    name: '',
    latitude: '',
    longitude: '',
    status: '',
  });
  const [isValidInput, setIsValidInput] = useState({
    name: false,
    latitude: false,
    longitude: false,
    status: false,
  });
  const [isCreateType, setIsCreateType] = useState(true);
  const [isActiveSubmit, setIsActiveSubmit] = useState(false);
  const [upsertWell, { loading, error, data }] = useMutation(UPSERT_WELL);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const wellInput = {
      name: wellInfo.name,
      longitude: parseFloat(wellInfo.longitude),
      latitude: parseFloat(wellInfo.latitude),
      rigId: rigId.toString(),
      id: id && id,
      status: wellInfo.status,
    };

    await upsertWell({
      variables: {
        wellInput: { ...wellInput },
      },
    });

    if (event.target.name === 'create') {
      handleWellModalClose();
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(wellActions.upsertWell(data.upsertWell));
    }
  }, [dispatch, loading, error, data]);

  useEffect(() => {
    let isValid = true;
    Object.entries(isValidInput).forEach(([key, value]) => {
      if (!value) {
        isValid = false;
      }
    });
    if (isActiveSubmit !== isValid) {
      setIsActiveSubmit(isValid);
    }
  }, [isValidInput, isActiveSubmit]);

  useEffect(() => {
    setIsCreateType(type === 'create');
    if (type === 'update') {
      setWellInfo({
        name: currentName,
        latitude: currentLatitude,
        longitude: currentLongitude,
        status: currentStatus,
      });
      setIsValidInput({
        name: true,
        latitude: true,
        longitude: true,
      });
    }
  }, [type, isOpen, currentName, currentLatitude, currentLongitude, id]);

  const handleChange = ({ target: { name, value } }) => {
    setWellInfo((wellInfo) => ({
      ...wellInfo,
      [name]: value,
    }));
    let isValidRange = true;
    switch (name) {
      case 'name':
        setIsValidInput((input) => ({
          ...input,
          [name]: /[^\s]/.test(value),
        }));
        break;
      case 'longitude':
        if (value > 180 || value < -180) {
          isValidRange = false;
        }
        setIsValidInput((input) => ({
          ...input,
          [name]: latLongRegExTest.test(value) && isValidRange,
        }));
        break;
      case 'latitude':
        if (value > 90 || value < -90) {
          isValidRange = false;
        }
        setIsValidInput((input) => ({
          ...input,
          [name]: latLongRegExTest.test(value) && isValidRange,
        }));
        break;
      case 'status':
        setIsValidInput((input) => ({
          ...input,
          [name]: checkForDrilling(value),
        }));
      default:
        break;
    }
  };

  return (
    <Dialog
      onClose={handleWellModalClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <div className="modal-container">
        <div className="dialog-title">
          {isCreateType ? 'Create well' : 'Edit well'}
          <button
            aria-label="close"
            className="close-button"
            onClick={handleWellModalClose}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="input-label">
          {' '}
          Well name<span>*</span>
        </div>
        <input
          name="name"
          type="text"
          className="input-field"
          value={wellInfo.name}
          placeholder="Enter a well name"
          onChange={handleChange}
        />
        <div className="input-label">
          {' '}
          Latitude<span>*</span>
        </div>
        <input
          name="latitude"
          type="text"
          className="input-field"
          value={wellInfo.latitude}
          placeholder="Enter latitude"
          onChange={handleChange}
        />
        <div className="input-label">
          {' '}
          Longitude<span>*</span>
        </div>
        <input
          name="longitude"
          type="text"
          className="input-field"
          value={wellInfo.longitude}
          placeholder="Enter longitude"
          onChange={handleChange}
        />
        <div className="input-label">
          {' '}
          Status<span>*</span>
        </div>
        <div className="status-row">
          <div className="radio-container">
            <img
              alt="radio button"
              className="radio"
              onClick={() => {
                const event = {
                  target: {
                    name: 'status',
                    value: 'active',
                  },
                };
                handleChange(event);
              }}
              src={wellInfo.status === 'active' ? radioActive : radioInactive}
            />
            <label for="active" className="radio-label">
              Active
            </label>
          </div>
          <div className="radio-container">
            <img
              alt="radio button"
              onClick={() => {
                const event = {
                  target: {
                    name: 'status',
                    value: 'inactive',
                  },
                };
                handleChange(event);
              }}
              src={wellInfo.status === 'inactive' ? radioActive : radioInactive}
            />
            <label for="inactive" className="radio-label">
              Inactive
            </label>
          </div>
          <div className="radio-container">
            <img
              alt="radio button"
              className="radio"
              onClick={() => {
                const event = {
                  target: {
                    name: 'status',
                    value: 'drilling',
                  },
                };
                handleChange(event);
              }}
              src={wellInfo.status === 'drilling' ? radioActive : radioInactive}
            />
            <label for="drilling" className="radio-label">
              Drilling
            </label>
          </div>
        </div>
        <div className="dialog-actions">
          {isCreateType && (
            <button
              name="add-another"
              disabled={!isActiveSubmit}
              className={
                'create-add ' + (!isActiveSubmit ? 'add-inactive' : '')
              }
              onClick={handleSubmit}
            >
              Create & add another
            </button>
          )}
          <button
            name="create"
            disabled={!isActiveSubmit}
            className={'create ' + (!isActiveSubmit ? 'create-inactive' : '')}
            onClick={handleSubmit}
          >
            {isCreateType ? 'Create' : 'Save'}
          </button>
        </div>
      </div>
    </Dialog>
  );
}
