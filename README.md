# cordova-uwp-plugin-sample

Calling Universal Windows Runtime Component "RuntimeComponent" from Cordova windows app.

# Set up 
Check out the sample project and run command `npm i` to install node modules
Run command `ionic cordova prepare windows` to add windows platform and custom plugins

Added custom plugin "cordova-custom-plugin-Win10" to call a Login api in WRC. Add "RuntimeComponent.csproj" reference to the CordovaApp.Windows10 project.

While running the application, click on `Click to Call WinRT` button.  This button click handler calls the RuntimeComponent.LoginPlugin.Login() api in WRC proj.
