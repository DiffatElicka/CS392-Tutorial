import { Link, useParams } from 'react-router-dom';
// import { firstLastName } from "./User";
import { useFormData } from '../utilities/useFormData';
import { useDbUpdate } from '../utilities/firebase';
import { useDbData } from '../utilities/firebase';

function courseFindId(courses, id) {
    // console.log(courses);
    for (const e of courses){
        console.log(e[1]);
        if(e[0] == id.id){
            return e[1];
        }
    }
    return null;
}

const validateUserData = (key, val) => {
    switch (key) {
        case 'title': 
          return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
        case 'meets':
          return /^(M?(Tu)?W?(Tr)?F?) \d{1,2}:\d{2}-\d{1,2}:\d{2}$|^$/.test(val)? '' : 'must contain XXX YY-ZZ, with XXX being valid school days in order, and YY ZZ being the beginning and the end of the class';
        default: return '';
      }
  };
  
  const InputField = ({name, text, state, change}) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{text}</label>
      <input className="form-control" id={name} name={name} 
        defaultValue={state.values?.[name]} onChange={change} />
      <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
  );
  
  const ButtonBar = ({message, disabled}) => {
    // const navigate = useNavigate();

    return (
      <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2" >Cancel</button>
        <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
        <span className="p-2">{message}</span>
      </div>
    );
  };
  
  const UserEditor = ({course, id}) => {
    // console.log(id.id);
    // const path = `/courses/` + id;
    // console.log(path);
    const [update, result] = useDbUpdate(`/courses/${id.id}`);
    const [state, change] = useFormData(validateUserData, course);
    const submit = (evt) => {
      evt.preventDefault();
      if (!state.errors) {
        update(state.values);
      }
    };
  
    return (
      <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
        <InputField name="term" text="Term" state={state} change={change} />
        <InputField name="title" text="Title" state={state} change={change} />
        <InputField name="number" text="Number" state={state} change={change} />
        <InputField name="meets" text="Meets" state={state} change={change} />
        <ButtonBar message={result?.message} />
      </form>
    )
  };



const CourseForm = ({ courses}) => {
    const id = useParams();
    var c = courseFindId(courses, id);
    return <div>
    <UserEditor course={c} id={id}></UserEditor>
  </div>
}

  


export default CourseForm;