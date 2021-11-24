import styled from "styled-components"


const LoddingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoddingIcon = styled.div`

`
const Lodding = ()=>{
  return(
  <LoddingWrapper>
    로딩중
  </LoddingWrapper>
  )
}

export default Lodding