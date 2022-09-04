A stupid silly and simple example showcasing the use of Vue JS without a build step using [http-vue-loader](https://github.com/FranckFreiburger/http-vue-loader)

---

**.vue** files or SFC (Single File Component) contain multiple sections

- Template: The UI
- JS Code: Data manipulation and binding business logic code.
- Style: CSS Styles (which can be scoped)

SFC files cannot be natively interpreted by web browsers hence the need for a build step. Build steps can be unnecessary given the dependency abomination that goes on in the node ecosystem.

The __http-vue-loader__ makes loading SFC files into the browser possible without a build step, with zero dependencies 👍.

#### Version

Vue 2

#### Testing

```bash
php -S localhost:9090
```