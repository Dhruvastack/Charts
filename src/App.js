import logo from './logo.svg';
import './App.css';
import { BarCharts } from './components/BarCharts';
import { Dough } from './components/Dough';
import { PieChart } from './components/PieChart';
import { Polars } from './components/Polar';
import { Radars } from './components/Radars';
import { Lines } from './components/Line';


function App() {
  return (
    <div className="App">
      <BarCharts/>
      <Dough/>
      <PieChart/>
      <Polars/>
      <Radars/>
      <Lines/>
    </div>
  );
}

export default App;
