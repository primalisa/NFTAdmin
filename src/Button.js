import * as React from 'react';
import
{
  Link
} from 'react-router-dom';
export default function Buttons(props) {
  return (
    
    <div className='showusersleftandbtn'>
      <p>4 left</p>
     <Link to={props.to}className="Button"></Link>
     </div>
     
    
  )
}