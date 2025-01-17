import moment from 'moment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

<TimePicker
  value={moment()}
  onChange={(date) => date?.set({ second: 0 })}
  renderInput={() => <input />}
/>;

// Allows inferring for side props
<TimePicker
  value={null}
  minTime={moment()}
  onChange={(date) => date?.set({ second: 0 })}
  renderInput={() => <input />}
/>;
