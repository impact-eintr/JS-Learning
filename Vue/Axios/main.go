package main

import (
	"net/http"
)

func main() {
	server := http.Server{
		Addr: "127.0.0.1:8080",
	}
	http.Handle("/js/", http.FileServer(http.Dir("static")))
	http.Handle("/", http.FileServer(http.Dir("static/html")))

	server.ListenAndServe()
}
