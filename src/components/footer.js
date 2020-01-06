import React, { Fragment } from 'react';

const footer = () => {
  return (
    <Fragment>
      <footer className='py-4 bg-dark text-white-50 sticky-footer'>
        <div className='container text-center'>
          <small>
            Copyright &copy; {new Date().getFullYear()} React Counter App.
          </small>
        </div>
      </footer>
    </Fragment>
  );
};

export default footer;
