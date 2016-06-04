import React, { Component } from 'react';
import styles from './Example.css';

class Example extends Component {
  render() {
    return (
      <div className={styles.root}>
        <span className={styles.title}>example</span>
      </div>
    );
  }
}

module.exports = Example;
