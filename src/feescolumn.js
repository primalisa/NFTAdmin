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
    Header:'Fee type',
    accessor:'name'
  },
  {
    Header:'Per NFT',
    accessor:'Address'
  },
  {
    Header:'Action',
    button: true,
    Cell: ({ cell }) => {
      return(
      <div class="viewdeletebtn">
      
      <Link   class="viewbutton changeamount" to="/Fees/ChangeAmount"></Link> 
      
      
      <Link class="deletebutton show" to="/Fees/showfees"></Link> 

    
    </div>)
  }
  }
]