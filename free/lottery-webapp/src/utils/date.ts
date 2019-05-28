/*
 * @Author: TravelerZw 
 * @Date: 2019-04-03 21:57:40 
 * @Last Modified by: TravelerZw
 * @Last Modified time: 2019-05-25 09:45:01
 */

export function myTimeToLocal(inputTime){
	if(!inputTime && typeof inputTime !== 'number'){
		return '';
	}
	var localTime = '';
	var inputTimes = new Date(inputTime).getTime();
	const offset = (new Date()).getTimezoneOffset();
	localTime = (new Date(inputTime - offset * 60000)).toISOString();
	localTime = localTime.substr(0, localTime.lastIndexOf('.'));
	localTime = localTime.replace('T', ' ');
	alert(localTime)
	return localTime;
}