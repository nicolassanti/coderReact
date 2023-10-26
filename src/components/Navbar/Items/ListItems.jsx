import './listItems.css'


function ListItem({children}) {

  return (
    <li className="litem">{children}</li>
  )
}

export default ListItem