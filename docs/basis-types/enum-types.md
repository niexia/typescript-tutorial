# TypeScript Enum

摘要：在本教程中，你将了解 TypeScript 枚举类型以及如何有效使用它。

## 什么是枚举

**枚举是一组命名的常量值**，enum 代表枚举类型。

要定义枚举，你需要按照以下步骤操作：

- **首先，使用 enum 关键字，后跟枚举的名称。**
- **然后，为枚举定义常量值。**

以下是定义枚举的语法：

```ts
enum name {constant1, constant2, ...};
```

在这种语法中，`constant1`、`constant2` 等也被称为**枚举的成员**。

## TypeScript 枚举类型示例

下面的例子创建了一个表示一年中各个月份的枚举：

```ts
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
```

在这个例子中，枚举的名称是 `Month`，常量值是 `Jan`, `Feb`, `Mar`，以此类推。

下面声明了一个使用 `Month` 枚举作为 `month` 参数类型的函数：

```ts
function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
```

你可以这样调用它：

```ts
console.log(isItSummer(Month.Jun)); // true
```

这个例子在枚举中使用常量值，包括`Jan`, `Feb`, `Mar`, ...，而不是像`1`, `2`, `3`, ...这样的魔法值，使代码更加可读。

## TypeScript 枚举是如何工作的

在代码中，使用枚举所定义的常量值是一个好的做法。

然而，下面的例子向`isItSummer()`函数传了一个数字而不是一个枚举。并且它是可以正确执行的：

```ts
console.log(isItSummer(6)); // true
```

这个例子**使用了一个数字（`6`），而不是由 `Month` 枚举定义的常数**，并且它是正确执行的。

让我们检查一下生成的 `Month` 枚举的 Javascript 代码。

```ts
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
```

你可以将 `Month` 变量输出到控制台：

```ts
{
  '0': 'Jan', 
  '1': 'Feb', 
  '2': 'Mar', 
  '3': 'Apr', 
  '4': 'May', 
  '5': 'Jun', 
  '6': 'Jul', 
  '7': 'Aug', 
  '8': 'Sep', 
  '9': 'Oct', 
  '10': 'Nov',
  '11': 'Dec',
  Jan: 0,     
  Feb: 1,     
  Mar: 2,     
  Apr: 3,     
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
}
```

正如您可以清晰地从输出中看到的那样，TypeScript 枚举在 JavaScript 中是一个对象。这个对象具有在枚举中声明的命名属性。例如，`Jan` 是 `0`，而 `Feb` 是 `1`。

**生成的对象还具有数字键和字符串值，表示命名常量。**

**这就是为什么你可以将一个数字传递给接受枚举的函数的原因。换句话说，枚举成员既是数字又是已定义常量**。

## 指定枚举成员的数值

**TypeScript 根据枚举定义中出现的成员的顺序，定义了枚举成员的数值**。例如，`Jan` 取 0，`Feb` 取 1，等等。

我们可以这样为枚举的成员明确地指定数字：

```ts
enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
```

在这个例子中，`Jan` 的常量值取 1 而不是 0，`Feb` 取 2，`Mar` 取 3，等等。

## 什么时候使用枚举

**你应该在以下情况下使用一个枚举：**

- **有一小组密切相关的固定值**
- **而且这些值在编译时就已经知道了。**


例如，你可以为审批状态使用一个枚举：

```ts
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};
```

然后你就可以这样使用 `ApprovalStatus` 枚举：

```ts
const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}
```

## 总结

- TypeScript 枚举是一组常量值。
- 在内部，枚举是一个 JavaScript 对象，在枚举定义中声明了命名属性。
- 当你有一小组紧密相关且在编译时已知的固定值时，请使用枚举。

