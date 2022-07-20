import "./App.css"
function View()
{

  let spinner = document.querySelector(".ViewdivFeaturedCollection")
  if (spinner.classList.contains("blurred")) {
  	spinner.classList.remove("blurred");
  } else {
  spinner.classList.add("blurred")
  }
}
export const COLUMNS=
[
  {
    Header:'SI.no',
    accessor:'id'
  },
  {
    Header:'Name',
    accessor:'name'
  },
  {
    Header:'Address',
    accessor:'Address'
  },
  {
    Header:'Action',
    button: true,
    Cell: ({ cell }) => {
      return(
      <div class="viewdeletebtn">
      <button onClick={View} class="viewbutton">
       
      </button>
      <button class="deletebutton">
      
    </button>
    </div>)
  }
  }
]