import React from 'react'
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocalDrinkOutlinedIcon from '@material-ui/icons/LocalDrinkOutlined';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './servicesStyle.scss'

const iconFunction = (title) => {
    switch (title) {
        case 'Cleaning':
            return <div className="circle-icon red" ><BuildOutlinedIcon fontSize="large"/> </div>
        case 'Testing':
            return <div className="circle-icon orange" ><LocalDrinkOutlinedIcon fontSize="large"/></div>
        case 'Wetstock':
            return <div className="circle-icon blue" ><TrackChangesOutlinedIcon fontSize="large"/></div>
        default:
            return null
    }
}

const createCardModel = (card, newItemInFront) => {
    return {
        id: card.id,
        itemInFront: newItemInFront,
        title: card.title,
        description: card.description,
        features: card.features.map( item => {
            return {
                id: item.id,
                ServiceId: item.ServiceId,
                itemInFront: item.itemInFront,
                text: item.text
            }
        })
    }
}

const createSwapArr = (contentCopy) => {

    let updateObjectsArr = []

    contentCopy.forEach( (item, index) => {
        if (index === 0) {
            if (item.itemInFront !== null) {
                updateObjectsArr.push({ variables: {servicesInput: createCardModel(item, null)}})
            }
        } else {
            if (item.itemInFront !== contentCopy[index -1].id) {
                updateObjectsArr.push({ variables: {servicesInput: createCardModel(item, contentCopy[index -1].id)}})
            }
        }
    })

    return updateObjectsArr
}

const Services = ({ content, upsertServices, setDropReset, dropReset }) => {

    const fireAllMutations = async (updateObjects) => {
        try {
            await Promise.all(updateObjects.map( model => {
                return upsertServices(model)
            }))
        } catch (e) {
            console.log(e)
        }
    }

    const cardArray = content.map( (cardInfo, index) => {
        return (
            <Draggable key={cardInfo.id} draggableId={cardInfo.id} index={index}>
                {(draggableProvided) => (
                    <div ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                        {iconFunction(cardInfo.title)}
                        <div className="description">
                            <h4>{cardInfo.description}</h4>
                        </div>
                        <ul className="list-items">
                            {cardInfo.features.map(item => (<li key={item.id} > {item.text} </li>))}
                        </ul>
                    </div>
                )}
            </Draggable> 
        )
    })

    const onDragEnd = async ({ destination, source, draggableId }) => {
        if (!destination) {
            return;
        }

        const contentCopy = content.map( item => item )
        const movedCard = contentCopy.splice(source.index, 1)
        contentCopy.splice(destination.index, 0, ...movedCard)
        
        const swapArr = createSwapArr(contentCopy)

        await fireAllMutations(swapArr)

        setDropReset(!dropReset)
    }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="services-section">
            <div className="header">
                <h1>Services</h1>
                <p>{`Certifications: Ken Wilcox & Associates & National Work Group of Leak Detection Evaluators`}</p>
            </div>
            <Droppable droppableId="cards-dropArea" type="card" direction="horizontal">
                {(provided) => (
                    <div className="card-container" ref={provided.innerRef} {...provided.droppableProps}>
                        {cardArray}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    </DragDropContext> 
  )
}

export default Services
