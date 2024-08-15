import { connect } from 'react-redux';
import Home from './components/Home';
import { RootState } from '@/app/store';

const mapStateToProps = (_state: RootState) => {
  return {};
};

const mapDispatchToProps = (_dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
