import React from 'react'
import faker from 'faker'
import AllOutIcon from '@material-ui/icons/AllOut';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './chooseUsStyles.scss'


const iconFunction = (title) => {
    switch (title) {
        case 'Tank Test':
            return <div className="icon red" ><AllOutIcon fontSize="large"/></div>
        case 'Line Test':
            return <div className="icon orange" ><AvTimerIcon fontSize="large"/></div>
        case 'Tank & Fuel Cleaning':
            return <div className="icon blue" ><DashboardIcon fontSize="large"/></div>
        default:
            return null
    }
}

const sortListItems = (items) => {
    const sortedItems = []
    let previousItem = null
    for (let i = 0; i < items.length; i++){
      for (let j = 0; j < items.length; j++) {
        if (items[j].itemInFront === previousItem){
          sortedItems.push(items[j])
          previousItem = items[j].id
        }
      }
    }
    return sortedItems
}

const createChooseUsItemModel = (item, newItemInFront) => {
    return {
        id: item.id,
        text: item.text,
        itemInFront: newItemInFront,
        ChooseUsFeaturesId: item.ChooseUsFeaturesId,
    }
}

const createSwapArray = (itemsCopy) => {
    let updateObjectsArray = []
    itemsCopy.forEach( (item, index) => {
        if (index === 0 && item.itemInFront !== null) {
                updateObjectsArray.push({ variables: {chooseUsItemsInput: createChooseUsItemModel(item, null)}})
        } else if (item.itemInFront !== itemsCopy[index-1].id) {
                updateObjectsArray.push({ variables: {chooseUsItemsInput: createChooseUsItemModel(item, itemsCopy[index-1].id)}})
        }
    })
    return updateObjectsArray
}

const ChooseUs = ({ content, upsertChooseUsItems, setDropReset, dropReset }) => {

    const randomImage = faker.image.image()

    const fireAllMutations = async (updateObjects) => {
        try {
            await Promise.all(updateObjects.map( model => {
                return upsertChooseUsItems(model)
            }))
        } catch (e) {
            console.log(e)
        }
    }
  
    let title, description, cardArray;
    try {
        title = content.heading.title
        description = content.heading.description
        cardArray = content.content.map( (item) => {
            const sortedItems = sortListItems(item.items)
            return (
                <div className="feature" key={item.id}>
                    <div>{iconFunction(item.title)} {item.title}</div>
                    <Droppable droppableId={item.title} type="item" direction="vertical">
                        {(provided) => (
                            <ul ref={provided.innerRef} {...provided.droppableProps}>
                                {sortedItems.map( (listItem, index) => {
                                    return (
                                        <Draggable key={listItem.id} draggableId={listItem.id} index={index}>
                                            {(draggableProvided) => (
                                                <li ref={draggableProvided.innerRef}
                                                {...draggableProvided.draggableProps}
                                                {...draggableProvided.dragHandleProps}
                                                >
                                                    {listItem.text}
                                                </li>
                                            )}
                                        </Draggable>
                                        )
                                    })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </div>
            )
        })
        
    } catch (error) {}

    const onDragEnd = async ({ destination, source, draggableId }) => {
        if (!destination || destination.droppableId !== source.droppableId) {
            return;
        }

        let contentCopy = content.content.map(item => item)

        let itemListCopy
        contentCopy.forEach( item => {
            if (item.title === destination.droppableId) { itemListCopy=item.items }
        })
        itemListCopy = sortListItems(itemListCopy)
        
        const movedItem = itemListCopy.splice(source.index, 1)
        itemListCopy.splice(destination.index, 0, ...movedItem)
        
        const swapArray = createSwapArray(itemListCopy)

        await fireAllMutations(swapArray)

        setDropReset(!dropReset)
    }

    return (
        <div className="choose-us-section">
            <div className="header"> {title} </div>
            <div className="content-block">
                <div className="picture-card">
                    <img src={randomImage} />
                </div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="content-card">
                        {description}
                        {cardArray}
                    </div>
                </DragDropContext>
            </div>    
        </div>
    )
}

export default ChooseUs
