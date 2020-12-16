initSidebarItems({"enum":[["PyStringData","Enum of possible Python string representations."]],"fn":[["prepare_freethreaded_python","Prepares the use of Python in a free-threaded context."]],"macro":[["py_argparse","This macro is used to parse a parameter list into a set of variables."],["py_capsule","Macro to retrieve a Python capsule pointing to an array of data, with a layer of caching."],["py_capsule_fn","Macro to retrieve a function pointer capsule."],["py_class","Defines new python extension class. A `py_class!` macro invocation generates code that declares a new Python class. Additionally, it generates a Rust struct of the same name, which allows accessing instances of that Python class from Rust."],["py_exception","Defines a new exception type."],["py_fn","Creates a Python callable object that invokes a Rust function."],["py_module_initializer",""],["pyobject_newtype",""]],"mod":[["argparse","This module contains logic for parsing a python argument list. See also the macros `py_argparse!`, `py_fn!` and `py_method!`."],["buffer",""],["exc","This module contains the python exception types."],["py_class",""],["serde","`serde` integration. - `to_py_object` converts a Rust value to a Python object. - `from_py_object` converts a Python object back to a Rust value."]],"struct":[["GILGuard","RAII type that represents the Global Interpreter Lock acquisition."],["GILProtected","Mutex-like wrapper object for data that is protected by the Python GIL."],["NoArgs","An empty struct that represents the empty argument list. Corresponds to the empty tuple `()` in Python."],["PyBool","Represents a Python `bool`."],["PyBytes","Represents a Python byte string. Corresponds to `str` in Python 2, and `bytes` in Python 3."],["PyCapsule","Capsules are the preferred way to export/import C APIs between extension modules, see Providing a C API for an Extension Module."],["PyDict","Represents a Python `dict`."],["PyErr","Represents a Python exception that was raised."],["PyFloat","Represents a Python `float` object."],["PyInt","In Python 2.x, represents a Python `long` object. In Python 3.x, represents a Python `int` object. Both `PyInt` and `PyLong` refer to the same type on Python 3.x."],["PyIterator","A python iterator object."],["PyLeakedRef","An immutably borrowed reference to a leaked value."],["PyLeakedRefMut","A mutably borrowed reference to a leaked value."],["PyList","Represents a Python `list`."],["PyLong","In Python 2.x, represents a Python `long` object. In Python 3.x, represents a Python `int` object. Both `PyInt` and `PyLong` refer to the same type on Python 3.x."],["PyModule","Represents a Python module object."],["PyObject","Represents a reference to a Python object."],["PySequence","Represents a reference to a python object supporting the sequence protocol."],["PySet","Represents a Python `set`."],["PySharedRef","A reference to `PySharedRefCell` owned by a Python object."],["PySharedRefCell","A mutable memory location shareable immutably across Python objects."],["PyString","Represents a Python string. Corresponds to `basestring` in Python 2, and `str` in Python 3."],["PyTuple","Represents a Python tuple object."],["PyType","Represents a reference to a Python type object."],["PyUnicode","Represents a Python string. Corresponds to `basestring` in Python 2, and `str` in Python 3."],["Python","Marker type that indicates that the GIL is currently held."],["PythonObjectDowncastError",""],["UnsafePyLeaked","An immutable reference to `PySharedRefCell` value, not bound to lifetime."]],"trait":[["FromPyObject","FromPyObject is implemented by various types that can be extracted from a Python object."],["ObjectProtocol","Trait that contains methods"],["PyClone",""],["PyDrop",""],["PythonObject","Trait implemented by all Python object types."],["PythonObjectWithCheckedDowncast","Trait implemented by Python object types that allow a checked downcast."],["PythonObjectWithTypeObject","Trait implemented by Python object types that have a corresponding type object."],["RefFromPyObject","RefFromPyObject is implemented by various types that can be extracted as a reference from a Python object. Depending on the input object, the reference may point into memory owned by the Python interpreter; or into a temporary object."],["ToPyObject","Conversion trait that allows various objects to be converted into Python objects."]],"type":[["PyResult","Represents the result of a Python call."],["Py_hash_t",""],["Py_ssize_t",""]]});