export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 + i; j++) {
            //swap
            if (arr[j] > arr[j+1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j]
                arr[j] = temp;
            }
        }
    }
}
