import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>My Time Table</h1>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>9–10</th>
            <th>10–11</th>
            <th>11–12</th>
            <th>12–1</th>
            <th>2–3</th>
            <th>3–4</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Monday</td>
            <td>Maths</td>
            <td>DSA</td>
            <td>English</td>
            <td>Web</td>
            <td>Maths</td>
            <td>DSA</td>
          </tr>

          <tr>
            <td>Tuesday</td>
            <td>DSA</td>
            <td>Maths</td>
            <td>English</td>
            <td>Web</td>
            <td>DSA</td>
            <td>Maths</td>
          </tr>

          <tr>
            <td>Wednesday</td>
            <td>English</td>
            <td>Web</td>
            <td>Maths</td>
            <td>DSA</td>
            <td>English</td>
            <td>Web</td>
          </tr>

          <tr>
            <td>Thursday</td>
            <td>Maths</td>
            <td>DSA</td>
            <td>English</td>
            <td>Web</td>
            <td>Maths</td>
            <td>DSA</td>
          </tr>

          <tr>
            <td>Friday</td>
            <td>DSA</td>
            <td>Maths</td>
            <td>English</td>
            <td>Web</td>
            <td>DSA</td>
            <td>Maths</td>
          </tr>

          <tr>
            <td>Saturday</td>
            <td>English</td>
            <td>Web</td>
            <td>Maths</td>
            <td>DSA</td>
            <td>English</td>
            <td>Web</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
