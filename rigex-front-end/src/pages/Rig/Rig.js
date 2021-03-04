import React from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

import './rig.scss';
import rigImage from '../../assets/rig.svg';
import WellModal from '../../components/WellModal/WellModal';
import WellsTable from '../../components/WellsTable/WellsTable';

const Rig = ({
  listOfRigs,
  handleRigModalOpen,
  wellModalInfo,
  handleWellModalOpen,
  handleWellModalClose,
  handleWellDelete,
}) => {
  const { id } = useParams();

  let rigName = '';
  let listOfWells = [];

  listOfRigs.map((rig) => {
    if (rig.id === id) {
      rigName = rig.name;
      listOfWells = rig.wells;
    }
    return null;
  });

  const checkForDrilling = (status, id) => {
    if (status === 'drilling') {
      const drillingWell = listOfWells.find(
        (well) => well.status === status && well.id !== id
      );
      if (drillingWell) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="well-panel">
      <div className="title-bar">
        <h2>{rigName}</h2>
        <div>
          <button
            className="edit-rig-button"
            onClick={() => handleRigModalOpen('update', rigName, id)}
          >
            <div>
              <EditIcon className="button-icon" fontSize="small" /> Edit rig
            </div>
          </button>
          {listOfWells.length ? (
            <button
              className="add-well-button"
              onClick={() => {
                handleWellModalOpen('create');
              }}
            >
              <div>
                <AddIcon className="button-icon" fontSize="small" /> Create well
              </div>
            </button>
          ) : null}
        </div>
      </div>
      {listOfWells.length ? (
        <WellsTable
          rigId={id}
          listOfWells={listOfWells}
          handleWellModalOpen={handleWellModalOpen}
          isSoloRig={listOfRigs.length === 1}
          handleWellDelete={handleWellDelete}
        />
      ) : (
        <div className="wells-table">
          <div className="image-container">
            <img src={rigImage} alt="rig svg" />
          </div>
          <div className="text-container">
            <span className="add-wells-text">
              Let's create some wells on this rig!
            </span>
            <span className="small-text">Get started by creating a well.</span>
            <button
              className="add-well-button"
              onClick={() => {
                handleWellModalOpen('create');
              }}
            >
              <div>
                <AddIcon className="button-icon" fontSize="small" /> Create well
              </div>
            </button>
          </div>
        </div>
      )}
      <WellModal
        checkForDrilling={checkForDrilling}
        wellModalInfo={wellModalInfo}
        handleWellModalClose={handleWellModalClose}
        rigId={id}
      />
    </div>
  );
};

export default Rig;
