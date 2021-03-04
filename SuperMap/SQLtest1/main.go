package main

import (
	"net/http"
)

func main() {
	server := http.Server{
		Addr: "127.0.0.1:8080",
	}

	http.Handle("/", http.FileServer(http.Dir("./static")))

	server.ListenAndServe()
}
