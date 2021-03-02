package main

import (
	_ "fmt"
	_ "html/template"
	"net/http"
)

func main() {
	server := http.Server{
		Addr: "127.0.0.1:8080",
	}
	http.Handle("/js/", http.FileServer(http.Dir("template")))
	http.Handle("/", http.FileServer(http.Dir("template/html")))

	server.ListenAndServe()
}
