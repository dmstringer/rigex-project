import AddIcon from '@material-ui/icons/Add';

import './noRigs.scss';
import rigImage from '../../assets/rig.svg';

const NoRigs = () => {
  return (
    <div className="no-rigs-panel">
      <div className="img-container">
        <img src={rigImage} alt="rig svg" />
      </div>
      <div className="txt-container">
        <span className="add-rigs-text">
          Start organizaing your rigs & wells!
        </span>
        <span className="sm-text">Get started by creating your first rig.</span>
        <button className="add-rig-button">
          <AddIcon className="add-rig-button-icon" />
          Create rig
        </button>
      </div>
    </div>
  );
};

export default NoRigs;
