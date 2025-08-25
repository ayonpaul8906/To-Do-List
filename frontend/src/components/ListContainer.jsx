import React from 'react'

function ListContainer() {
  return (
    <div className="list-container">
          <div id='list'>
            <div className='list-item'>
              <span>Task 1</span>
              <div className="actions">
                  <input type="checkbox" />
                  <button className='delete-btn'>Delete</button>
              </div>
            </div>

             <div className='list-item'>
              <span>Task 2</span>
              <div className="actions">
                  <input type="checkbox" />
                  <button className='delete-btn'>Delete</button>
              </div>
            </div>

             <div className='list-item'>
              <span>Task 3</span>
              <div className="actions">
                  <input type="checkbox" />
                  <button className='delete-btn'>Delete</button>
              </div>
            </div>
            
          </div>
        </div>
  )
}

export default ListContainer
