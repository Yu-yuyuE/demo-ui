import React from 'react';
import style from './style/index.module.less';

export interface ButtonProps {
	/**
	 * 样式
	 */
	primary?: boolean;
	/**
	 * 背景色
	 */
	backgroundColor?: string;
	/**
	 * 大小
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * 内容
	 */
	label: string;
	/**
	 * click响应事件
	 */
	onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary
		? style['storybook-button--primary']
		: style['storybook-button--secondary'];
	return (
		<button
			type='button'
			className={[
				style['storybook-button'],
				style[`storybook-button--${size}`],
				mode,
			].join(' ')}
			style={{backgroundColor}}
			{...props}>
			{label}
		</button>
	);
};
