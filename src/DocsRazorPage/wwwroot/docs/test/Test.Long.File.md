

# Markdown.Capability.Test

## Relative path

Relative path Test

[SubTest](Test/SubTest/SubTest.md)

[Another](Test/Another.md)

![image01](./image01.png)

## Tasks

- [x] Task1
- [ ] Task2
- [X] Task2

## Code

<p>In order to use the terminal you need to enter <kbd>cmd</kbd> in your run application field.</p>
                <p>After you have entered cmd, you need to click OK or press <kbd>Enter</kbd> to activate the console.
                </p>
                <p>If everything works OK, you should be greeted with something similar to:</p>
                <p class="font-weight-bold"> <samp>Microsoft Windows [Version 6.1.7601]</samp><br /> <samp>Copyright (c)
                        2009</samp><br /><br /> <samp>C:\Users\user></samp><br /> </p>
                <p>If you type <kbd>dir</kbd> and press <kbd>Enter</kbd> you should now get a listing of your files.</p>

## Color

- This is a <span style="background:yellow">sentence</span>.
- <div class="text-danger">This is another line</div>

## emoji

- {":negative_squared_cross_mark:", "❎"},
- {":white_check_mark:", "✅"},
- {":x:", "❌"},
- {":heavy_check_mark:", "✔️"},
- {":+1:", "👍"},
- {":-1:", "👎"},
- {":bulb:", "💡"}
- {":memo:", "📝"},
- {":warning:", "⚠️"},
- {":one:", "1️⃣"},
- {":two:", "2️⃣"},
- {":three:", "3️⃣"},
- {":four:", "4️⃣"},
- {":five:", "5️⃣"},
- {":six:", "6️⃣"},
- {":seven:", "7️⃣"},
- {":eight:", "8️⃣"},
- {":nine:", "9️⃣"},
- {":zero:", "0️⃣"},
- {":keycap_ten:", "🔟"},
- {":no_entry:", "⛔"},

## Test Image图像Looooooooooooooooooooooooooooooooooooooooooog title

The first line

![](http://vipkshttp0.wiz.cn/ks/share/resources/931fc230-abaf-41ed-8418-3f7ff799b9ab/4e130fbd-e2bd-48f4-b396-7ce4d12a98f4/index_files/d390debf-e54f-49b8-b3b7-bffb589f6e5d.png)

The second line

## Test Blockquote

> **Warning** This is a warning

> **Tips** This are tips

> ![Information](http://vipkshttp0.wiz.cn/ks/share/resources/931fc230-abaf-41ed-8418-3f7ff799b9ab/2c1b3136-fcc4-48e9-b747-cfadfc7bfab9/index_files/0.4690519957313266.png) This is information

## Test Table

| Name                                        | SubName                                                                  | ChineseName | Author                      | PublishingHouse | Date  | Memo        |
| ------------------------------------------- | ------------------------------------------------------------------------ | ----------- | --------------------------- | :-------------: | :---: | ----------- |
| :warning: :bulb: Object-Oriented JavaScript | Learn everything you need to know about OOJS in this comprehensive guide | -           | Ved Antani, Stoyan Stefanov |      Packt      | 2017  | 3nd Edition |
| Object-Oriented JavaScript                  | Learn everything you need to know about OOJS in this comprehensive guide | -           | Ved Antani, Stoyan Stefanov |      Packt      | 2017  | 3nd Edition |
| Object-Oriented JavaScript                  | Learn everything you need to know about OOJS in this comprehensive guide | -           | Ved Antani, Stoyan Stefanov |      Packt      | 2017  | 3nd Edition |
| Object-Oriented JavaScript                  | Learn everything you need to know about OOJS in this comprehensive guide | -           | Ved Antani, Stoyan Stefanov |      Packt      | 2017  | 3nd Edition |

## Test List

* List
    * Lists
    * Lists
* List

1. Line1
2. Line2 2.1 Line21 2.2 Line22
3. Line3
4. Line4

## Control image width

<img src="http://vipkshttp0.wiz.cn/ks/share/resources/931fc230-abaf-41ed-8418-3f7ff799b9ab/2c1b3136-fcc4-48e9-b747-cfadfc7bfab9/index_files/0.4690519957313266.png" width=200 />

## Code

```cs
public async Task<IActionResult> Login(string returnUrl = null)
{
    // Clear the existing external cookie to ensure a clean login process
    await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

    ViewData["ReturnUrl"] = returnUrl;
    return View();
}
```

```powershell
Get-Service -Display sh*
```

```cpp
void Function() {
	
}
```







