package main

import (
	"fmt"
	"html/template"
	"net/http"
	"os"
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

	err := server.ListenAndServe()
	if err != nil {
		fmt.Fprintf(os.Stderr, "%s\n", err)
	}
}
