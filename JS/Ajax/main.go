package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("template/html/index.html")
	if err != nil {
		fmt.Println(err)
	}
	t.Execute(w, nil)
}

func main() {
	server := http.Server{
		Addr: "127.0.0.1:8080",
	}
	http.Handle("/js/", http.FileServer(http.Dir("template")))
	http.HandleFunc("/", index)

	server.ListenAndServe()
}
