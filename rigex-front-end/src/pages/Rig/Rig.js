import React from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

import './rig.scss';
import rigImage from '../../assets/rig.svg';
import CreateWellModal from '../../components/createWellModal/createWell';
import WellsTable from '../../components/WellsTable/WellsTable';

const Rig = ({
  listOfRigs,
  handleRigModalOpen,
  wellModalOpen,
  handleWellModalOpenStatus,
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
              onClick={handleWellModalOpenStatus}
            >
              <div>
                <AddIcon className="button-icon" fontSize="small" /> Create well
              </div>
            </button>
          ) : null}
        </div>
      </div>
      {listOfWells.length ? (
        <WellsTable listOfWells={listOfWells} rigId={id} />
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
              onClick={handleWellModalOpenStatus}
            >
              <div>
                <AddIcon className="button-icon" fontSize="small" /> Create well
              </div>
            </button>
          </div>
        </div>
      )}
      <CreateWellModal
        wellModalOpen={wellModalOpen}
        handleWellModalClose={handleWellModalOpenStatus}
        rigId={id}
      />
    </div>
  );
};

export default Rig;
