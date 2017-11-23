import React from 'react';
import ReactDOM from 'react-dom';

import Head from './Head';
import Content from './Content';

ReactDOM.render(<div align="center" className="content">
        <Head/>
        <Content/>
    </div>,
    document.getElementById('app')
);