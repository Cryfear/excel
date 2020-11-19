import './scss/index.scss';

import Header from '@/components/Excel/Header/Header';
import Table from '@/components/Excel/Table/Table';
import Toolbar from '@/components/Excel/Toolbar/Toolbar';
import Formula from '@/components/Excel/Formula/Formula';
import Excel from '@/components/Excel/Excel';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
});

excel.render();
