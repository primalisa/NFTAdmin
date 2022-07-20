import "./App.css"
import 
{ 
  Link
  
} from 'react-router-dom';
export const COLUMNS=
[
  {
    Header:'SI.no',
    accessor:'id'
  },
  {
    Header:'Category Name',
    accessor:'name'
  },
  {
    Header:'Active',
    accessor:'Address'
  },
  {
    Header:'Action',
    button: true,
    Cell: ({ cell }) => {
      return(
      <div class="viewdeletebtn">
      <button  class="search searchwhite"><Link to="/CategoryList/showcategory">
       show</Link>
      </button>
      <button class="search searchwhite"><Link to="/CategoryList/editcategory">
      Edit</Link>
    </button>
    <button class="search searchwhite">
      Delete
    </button>

    </div>)
  }
  }
]