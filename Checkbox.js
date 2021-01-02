import React, { useState} from 'react'
import styled from 'styled-components'

function Checkbox(todo){
    
    return(
    <div>
        <label>
          <Checkbox
            checked={todo.isComplete}
            onChange={this.handleCheckboxChange}
          />
        </label>
      </div>    
    ) 
  }

  export default Checkbox;