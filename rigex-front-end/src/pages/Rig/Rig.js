import { useParams } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

import './rig.scss';
import rigImage from '../../assets/rig.svg';

const Rig = ({ listOfRigs }) => {
  const { id } = useParams();

  let rigName = `No Rig with id: ${id} Found`;
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
          <button className="edit-rig-button">
            <div>
              <EditIcon className="button-icon" fontSize="small" /> Edit rig
            </div>
          </button>
          {listOfWells.length ? null : (
            <button className="add-well-button">
              <div>
                <AddIcon className="button-icon" fontSize="small" /> Create well
              </div>
            </button>
          )}
        </div>
      </div>
      {listOfWells.length ? null : (
        <div className="wells-table">
          <div className="image-container">
            <img src={rigImage} alt="rig svg" />
          </div>
          <div className="text-container">
            <span className="add-wells-text">
              Let's create some wells on this rig!
            </span>
            <span className="small-text">
              {' '}
              Get started by creating a well.{' '}
            </span>
            <button className="add-well-button">
              <div>
                <AddIcon className="button-icon" fontSize="small" /> Create well
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rig;
