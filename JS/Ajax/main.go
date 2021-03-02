package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func indexGet(c *gin.Context) {
	c.HTML(http.StatusOK, "template/html/index.html", nil)
}

func main() {

	router := gin.Default()

	router.LoadHTMLGlob("template/html/*")
	router.Static("./template/js", "js")
	router.GET("/index", indexGet)

	router.Run(":8080")

}
