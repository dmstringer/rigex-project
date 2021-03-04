import React from 'react';
import faker from 'faker';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import './testsStyles.scss'

const Tests = ({ content }) => {

    const randomImage = faker.image.image()

    const testContent = content.map( (item, index) => {
            return (
                <div className="test-feature" key={item.id}>
                    {(!index%2)? (<div className="picture"> <img src={randomImage} alt="faker"/> </div>) : null}
                    <div className="content">
                        <span>{item.title}</span>
                        <div>
                            {item.items.map( listItem => {
                                return (
                                    <div key={listItem.id}>
                                        <CheckCircleOutlineIcon fontSize="small" />
                                        {listItem.text}
                                    </div>
                                    )
                                })}
                        </div>
                    </div>
                    {(index%2)? (<div className="picture"> <img src={randomImage} alt="faker"/> </div>) : null}
                </div>
            )
    })

    return (
        <div className="test-section">
            {testContent}
        </div >
    )
}

export default Tests
