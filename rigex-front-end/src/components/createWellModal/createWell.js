import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";

import { wellActions } from '../../store/wells/action';
import { UPSERT_WELL } from '../../constants/serviceAPI';
import "./wellModalStyles.scss"

export default function CreateWellModal({wellModalOpen, handleWellModalClose, rigId}) {

    const [wellInfo, setWellInfo] = useState({
        name: "",
        latitude: "",
        longitude: ""
    });
    const [upsertWell, { loading, error, data }] = useMutation(UPSERT_WELL);
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        await upsertWell({
            variables: {wellInput: {
                name: wellInfo.name,
                longitude: parseFloat(wellInfo.longitude),
                latitude: parseFloat(wellInfo.latitude),
                rigId: rigId.toString()
            }}
        })

        if (event.target.name === "create") {
            handleWellModalClose()
        }
    }

    useEffect(() => {
      if (data) {
          dispatch(wellActions.upsertWell(data.upsertWell))
      }
    }, [dispatch, loading, error, data])

    const [validName, setValidName] = useState(false)

    const handleChange = (event) => {

        let latLongRegExTest = /^-?[0-9]{1,3}(?:\.([0-9]{1,10})?)?$/
        if (event.target.name !== "name"){
            if (event.target.value === '' || latLongRegExTest.test(event.target.value)) {
                setWellInfo((wellInfo) => {
                   return  {
                        ...wellInfo,
                        [event.target.name] : event.target.value
                    }
                })
            } 
        } else if (event.target.name === "name") {
            setWellInfo((wellInfo) => {
                return  {
                    ...wellInfo,
                    [event.target.name] : event.target.value
                 }
            })
            if (/[^\s]/.test(event.target.value)) {
                setValidName(true)
            } else {
                setValidName(false)
            }
        }
    }

    return (
        <Dialog onClose={handleWellModalClose} aria-labelledby="customized-dialog-title" open={wellModalOpen}>
            <div className="modal-container">
                <div className="dialog-title">
                    Create well
                    <button aria-label="close" onClick={handleWellModalClose}>
                        <CloseIcon />
                    </button>
                </div>
                <div> Well Name: <span>*</span></div>
                <input 
                    name="name"
                    type="text"
                    value={wellInfo.name}
                    placeholder="Enter a well name"
                    onChange={handleChange}
                />
                <div> Latitude: <span>*</span></div>
                <input
                    name="latitude"
                    type="text"
                    value={wellInfo.latitude}
                    placeholder="Enter latitude"
                    onChange={handleChange}
                />
                <div> Longitude: <span>*</span></div>
                <input
                    name="longitude"
                    type="text"
                    value={wellInfo.longitude}
                    placeholder="Enter longitude"
                    onChange={handleChange}
                />
                <div className="dialog-actions">
                    <button
                        name="add-another"
                        disabled={!validName}
                        className={(!validName) ? "inactive" : ""}
                        onClick={handleSubmit}
                    >
                        Create & add another
                    </button>
                    <button
                        name="create"
                        disabled={!validName}
                        className={(!validName) ? "inactive" : "create"}
                        onClick={handleSubmit}
                    >
                        Create well
                    </button>
                </div>
            </div>
        </Dialog>
    );
}
