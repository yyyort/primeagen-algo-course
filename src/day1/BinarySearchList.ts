export default function bs_list(haystack: number[], needle: number): boolean {
	let lo = 0 //lowest  boundery
	let hi = haystack.length //highest boundery 
	
	//checking if either we cant decrease the hi anymore increase the lo anymore
	while (lo < hi) {
		const m = Math.floor((lo + hi) / 2) //mid of lo and hi
		
		if (haystack[m] === needle){
			return true
		} else if (haystack[m] > needle) {
			//needle is somewhere on the lower side
			//move the upper boundery to mid
			hi = m - 1
		} else {
			//needle is somewhere on the right side
			//move the lower boundery to mid
			lo = m + 1
		}
	}

	return false;
}
