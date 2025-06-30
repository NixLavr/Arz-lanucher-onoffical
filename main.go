package main

import (
	"arz-unoffical1/app"
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/linux"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := app.NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:     "arz-unoffical",
		Width:     1024,
		Height:    768,
		Frameless: true,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		Linux: &linux.Options{
			WindowIsTranslucent: true,
			WebviewGpuPolicy:    linux.WebviewGpuPolicyNever,
			ProgramName:         "wails",
		},
		BackgroundColour: &options.RGBA{R: 0, G: 0, B: 0, A: 0},
		OnStartup:        app.Startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
