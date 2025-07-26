package main

import (
	"fmt"
	"time"
)

func main() {

	s := "How world 😊"

	r := []rune(s)

	fmt.Println(s)
	fmt.Println(r)
	
	 for n := range 6 {
		
        if n%2 == 0 {
            continue
        }
        fmt.Println(n)
    }


	fmt.Println("hello world")

	switch time.Now().Weekday() {
	case time.Friday:
		fmt.Println("this is not weekday")
	case time.Sunday: 
		fmt.Println("this is weekday")
	default:
		fmt.Println("neither")
	}


	whoAmI := func (i interface{}) {
		switch i.(type) {
	case bool:
	fmt.Println("this is bool")
	case int: 
		fmt.Println("this is int")
	default:
		fmt.Println("neither, may be string, rune ...who knows")
	}
	}
	
	whoAmI("good")
	whoAmI(2)
	whoAmI(true)



    b:= [...]int{100, 3: 400, 500}
    fmt.Println("idx:", b)


twoD := make([][]int, 3)

// i = 0,1,2

    for i := range 3 {
        innerLen := i + 1
	
        twoD[i] = make([]int, innerLen)

		// println(twoD[i])

        for j := range innerLen {
            twoD[i][j] = i + j
			
        }
    }
    fmt.Println("2d: ", twoD)
}
