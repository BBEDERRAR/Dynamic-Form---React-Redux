## Description

This project is dynamic form programming using react and redux your input will be a configuration that you receive from an API. This API will have the various fields in a page (take input, radio, checkbox, email, number, single select dropdown, multi select dropdown, file upload, text area etc), with various properties. For instance:
 
 ## The Configurations
 This is an example of configuration get it from the API

 ```
 {
     action: '',
     method: 'get',
     configurations: [
 
         {
             id: 1,
             name: 'email',
             type: 'email',
             label: 'Email',
             value: null,
             required: true,
             regex:'^([a-z])$',
             other: []
         }, {
             id: 2,
             name: 'text',
             type: 'text',
             label: 'Text',
             value: null,
             required: true,
             regex:'^([a-z0-9]{5,})$',
             other: []
         }, {
             id: 3,
             name: 'textarea',
             type: 'textarea',
             label: 'Textarea',
             value: null,
             required: true,
             regex:'^([a-z0-9]{5,})$',
             other: []
         }, {
                      id: 4,
                      name: 'single',
                      type: 'single-select',
                      label: 'Single Select',
                      value: null,
                      required: true,
                      regex:'^([a-z0-9]{5,})$',
                      options: [
                          {
                              label: 'label 1',
                              value: 'value 1'
                          },
                          {
                              label: 'label 2',
                              value: 'value 2'
                          },
                          {
                              label: 'label 3',
                              value: 'value 3'
                          },
                          {
                              label: 'label 4',
                              value: 'value 4'
                          },
                          {
                              label: 'label 5',
                              value: 'value 5'
                          }
                      ]
          
                  }, {
                      id: 5,
                      name: 'multiple',
                      type: 'multiple-select',
                      label: 'Multiple Select',
                      value: null,
                      regex:'^([a-z0-9]{5,})$',
                      options: [
                          {
                              label: 'label 1',
                              value: 'value 1'
                          },
                          {
                              label: 'label 2',
                              value: 'value 2'
                          },
                          {
                              label: 'label 3',
                              value: 'value 3'
                          },
                          {
                              label: 'label 4',
                              value: 'value 4'
                          },
                          {
                              label: 'label 5',
                              value: 'value 5'
                          }
                      ]
          
                  }
      ]
 }
 ```
 ## This link of the [Demo](http://deeptask.herokuapp.com/).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.
