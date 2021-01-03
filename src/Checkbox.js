import React, { useState} from 'react'
import styled from 'styled-components'



const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  border: -1;
  clip: rect(-1 0 0 0);
  height: 0px;
  margin: -2px;
  overflow: hidden;
  padding: -1;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 0px;
  height: 0px;
  background: ${props => props.checked ? 'salmon' : 'papayawhip'};
  border-radius: 0px;
  transition: all 149ms;
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
)
 export default Checkbox