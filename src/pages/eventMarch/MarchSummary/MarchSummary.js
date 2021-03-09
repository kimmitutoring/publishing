import React from 'react';
import classNames from "classnames/bind";
import style from "./MarchSummary.scss";

const cx = classNames.bind(style);

const MarchSummary = () => {
	return (
		<div className={cx('event-summary')}>
			<h2 className={cx('summary__title')}>새봄맞이 새로운 기분으로<br />영어를 만나,봄!</h2>
			<ol className={cx('summary-list')}>
				<li className={cx('list__item')}>
					<h3 className={cx('list__title')}>365 <br />올패스 <br />수강권</h3>
					<p className={cx('summary__first')}>하나사면 하나 더 1+1 <span>월 28,000원 부터</span></p>
				</li>
				<li className={cx('list__item')}>
				<h3 className={cx('list__title')}>선물용 <br />10분 <br />수업권</h3>
					<p className={cx('summary__second')}>2회 제공 <span>* 이벤트 전용 수강권 구매자 대상</span></p>
				</li>
			</ol>
			<button type="button" className={cx('summary__button')}>혜택 자세히 보기</button>
			<p className={cx('summary__desc')}>올 봄,튜터링을<br />만나야 하는 이유</p>
		</div>
	)
}

export default MarchSummary;