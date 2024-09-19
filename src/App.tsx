import './App.css'
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
function App() {

  return (
    <>
        <FullCalendar plugins={[daygridPlugin]} />
    </>
  )
}

export default App
