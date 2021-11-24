import styled from 'styled-components';
import { category, subject } from '../../constance';
import { categoryName, categoryType, titleAddInitType, titleAddInputPaylode, titleAddList } from '../../types';
import Lodding from '../Lodding';

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const SelectName = styled.div`
  font-size: 20px;
  font-weight: 600;
`
const Select = styled.select`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 0 10px;
  appearance: none;
  text-align: center;
  margin: 10px 10px;
  font-weight: 600;
  > option {
    color: black;
  }
`;

const SelectNoneBox=styled.div`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  filter: opacity(0.5);
  margin: 10px 10px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  font-weight: 600;

  color: black;
  font-size: 18px;
  margin: 10px 10px;
  text-align: center;
  
`
const AddTitleButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background-color:  #664ceb;
  border: 3px solid white;
  transition: all .5s;
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
:hover{
    background-color: white;
    color: #664ceb;
  }
`
interface Props extends titleAddInitType{
  setInput:(paylode:titleAddInputPaylode)=>void;
  setAddTitle:()=>void
}
const AdminAddTitle:React.FC<Props> = (props) => {
  const {setInput,setAddTitle,lodding}=props;
  const AdminChange = (e: React.ChangeEvent<HTMLSelectElement> |React.ChangeEvent<HTMLInputElement>)=>{
    const { value, name } = e.currentTarget;
    
    setInput({name:name as titleAddList,value:value});
  }

  return (
    <Wrapper>
      <Title>title 추가</Title>{lodding?<Lodding></Lodding>:<>
      <SelectName>category</SelectName>
      <Select name="category" onChange={(e)=>AdminChange(e)}>
        <option value={""}>클릭하여 선택하세요</option>
        {category.map((props)=>(
          <option value={props}>{props}</option>
        ))}
        </Select>
      <SelectName>subject</SelectName>
        {props.titleAddInfo.category?<Select name="subjectId" onChange={AdminChange}>
          <option value={undefined}>클릭하여 선택하세요</option>
          {subject[props.titleAddInfo.category as categoryName].map((props)=>(
            <option value={props.subjectId}>{props.subjectName}</option>
          ))}
        </Select>:<SelectNoneBox>category를 먼저 선택해주세요</SelectNoneBox>}
      <SelectName>title</SelectName>  
        {props.titleAddInfo.subjectId&&props.titleAddInfo.category?<TitleInput placeholder="title을 입력해 주세요" name="addTitleName" onChange={AdminChange}></TitleInput>:<SelectNoneBox>subject를 먼저 선택해주세요</SelectNoneBox>}
      <AddTitleButton onClick={setAddTitle}>title 추가</AddTitleButton>
          </>
          }
      </Wrapper>
  );
};

export default AdminAddTitle;
