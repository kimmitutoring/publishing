import React from 'react';
import classNames from "classnames/bind";
import style from "./MarchSpot.scss";

const cx = classNames.bind(style);

const MarchSpot = () => {
	return (
		<div className={cx('march-spot')}>
			<h1 className={cx('spot__title')}>3월 아주땡큐 1+1 이벤트</h1>
			<p className={cx('spot__desc')}>Thank you very march 1+1 event (3,000,000 DOWNLOADED)</p>
			<span className={cx('spot__period')}>03.11 to 03.21</span>
		</div>
	)
}

export default MarchSpot;