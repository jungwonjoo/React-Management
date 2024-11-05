import './App.css';
import Customer from './components/Customer';

const customers =[
  {
    id:1,
    image:'https://picsum.photos/64',
    name:"고길동",
    birthday:"2000.01.01",
    gender:"남자",
    job:"둘리보호자"
  },
  {
    id:2,
    image:'https://picsum.photos/64',
    name:"둘리",
    birthday:"2000.01.01",
    gender:"남자",
    job:"호이호이"
  },
  {
    id:3,
    image:'https://picsum.photos/64',
    name:"또치",
    birthday:"2000.01.01",
    gender:"남자",
    job:"또치또치또또치"
  }
]

function App() {
  return (
    <>
      {
        customers.map((customer) => {
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            /> 
          )
        })
      }
    </>
  );
}

export default App;
