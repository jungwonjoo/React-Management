// 필요한 모듈 임포트
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { withStyles } from '@mui/style';

// 스타일 정의
// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto'
//   },
//   table: {
//     minWidth: 1080
//   }
// });

// 고객 데이터
const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/64',
    name: "고길동",
    birthday: "2000.01.01",
    gender: "남자",
    job: "둘리보호자"
  },
  {
    id: 2,
    image: 'https://picsum.photos/64',
    name: "둘리",
    birthday: "2000.01.01",
    gender: "남자",
    job: "호이호이"
  },
  {
    id: 3,
    image: 'https://picsum.photos/64',
    name: "또치",
    birthday: "2000.01.01",
    gender: "남자",
    job: "또치또치또또치"
  }
];

// App 컴포넌트
function App(props) {
  const { classes } = props; // withStyles를 통해 받은 classes를 props에서 가져옴

  return (
    // <Paper className={classes.root}>
    //   <Table className={classes.table}>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(customer => (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

// withStyles로 App 컴포넌트를 감싸서 스타일 적용
// export default withStyles(styles)(App);
export default App;