// @flow
import Awral from 'awral'
/**
 * `parseJSON()` adds property "ok"
 *  that identicates that response is OK
 *
 *  This func to determinates is response from API was successful or failed
 *
 * @param  {Object} result - response from API
 * @return {Boolean} - indicates was request successful or not
 */
const check = (result: Object = {ok: false}): boolean => result.ok
const beforeCheck = a => a
const afterCheck = a => a.data
// Create default Awral
export const awral = Awral.of({check, beforeCheck, afterCheck})
