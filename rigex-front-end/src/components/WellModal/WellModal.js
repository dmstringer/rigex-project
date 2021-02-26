import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';

import { wellActions } from '../../store/wells/action';
import { UPSERT_WELL } from '../../constants/serviceAPI';
import { latLongRegExTest } from '../../constants/regexTests';
import './wellModalStyles.scss';

export default function WellModal({
  wellModalInfo: {
    type,
    isOpen,
    currentName,
    currentLatitude,
    currentLongitude,
    id,
  },
  handleWellModalClose,
  rigId,
}) {
  const [wellInfo, setWellInfo] = useState({
    name: '',
    latitude: '',
    longitude: '',
  });
  const [isValidInput, setIsValidInput] = useState({
    name: false,
    latitude: false,
    longitude: false,
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
          value={wellInfo.longitude}
          placeholder="Enter longitude"
          onChange={handleChange}
        />
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
