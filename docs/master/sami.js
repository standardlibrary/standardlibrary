
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>            </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "StandardLibrary.html", "name": "StandardLibrary", "doc": "Namespace StandardLibrary"},{"type": "Namespace", "link": "StandardLibrary/Contracts.html", "name": "StandardLibrary\\Contracts", "doc": "Namespace StandardLibrary\\Contracts"},{"type": "Namespace", "link": "StandardLibrary/Contracts/Type.html", "name": "StandardLibrary\\Contracts\\Type", "doc": "Namespace StandardLibrary\\Contracts\\Type"},{"type": "Namespace", "link": "StandardLibrary/Enums.html", "name": "StandardLibrary\\Enums", "doc": "Namespace StandardLibrary\\Enums"},{"type": "Namespace", "link": "StandardLibrary/Exceptions.html", "name": "StandardLibrary\\Exceptions", "doc": "Namespace StandardLibrary\\Exceptions"},{"type": "Namespace", "link": "StandardLibrary/Helpers.html", "name": "StandardLibrary\\Helpers", "doc": "Namespace StandardLibrary\\Helpers"},
            {"type": "Interface", "fromName": "StandardLibrary\\Contracts", "fromLink": "StandardLibrary/Contracts.html", "link": "StandardLibrary/Contracts/CastsToString.html", "name": "StandardLibrary\\Contracts\\CastsToString", "doc": "&quot;Interface for casting objects to a string&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\CastsToString", "fromLink": "StandardLibrary/Contracts/CastsToString.html", "link": "StandardLibrary/Contracts/CastsToString.html#method___toString", "name": "StandardLibrary\\Contracts\\CastsToString::__toString", "doc": "&quot;Cast to string&quot;"},
            
            {"type": "Interface", "fromName": "StandardLibrary\\Contracts", "fromLink": "StandardLibrary/Contracts.html", "link": "StandardLibrary/Contracts/Sortable.html", "name": "StandardLibrary\\Contracts\\Sortable", "doc": "&quot;Contract describing that an object can be sorted&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Sortable", "fromLink": "StandardLibrary/Contracts/Sortable.html", "link": "StandardLibrary/Contracts/Sortable.html#method_sort", "name": "StandardLibrary\\Contracts\\Sortable::sort", "doc": "&quot;Sort an object&quot;"},
            
            {"type": "Interface", "fromName": "StandardLibrary\\Contracts", "fromLink": "StandardLibrary/Contracts.html", "link": "StandardLibrary/Contracts/TypeEquality.html", "name": "StandardLibrary\\Contracts\\TypeEquality", "doc": "&quot;Compare equality between two {@link Type} objects&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\TypeEquality", "fromLink": "StandardLibrary/Contracts/TypeEquality.html", "link": "StandardLibrary/Contracts/TypeEquality.html#method_equals", "name": "StandardLibrary\\Contracts\\TypeEquality::equals", "doc": "&quot;Compare two {@link Type} objects&quot;"},
            
            {"type": "Interface", "fromName": "StandardLibrary\\Contracts\\Type", "fromLink": "StandardLibrary/Contracts/Type.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html", "name": "StandardLibrary\\Contracts\\Type\\CollectionType", "doc": "&quot;Collection type interface&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_toArray", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::toArray", "doc": "&quot;Return collection as a PHP native array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_set", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::set", "doc": "&quot;Sets a key\/pair value&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_get", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::get", "doc": "&quot;Get a value&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_exists", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::exists", "doc": "&quot;Check that an offset exists&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_delete", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::delete", "doc": "&quot;Deletes a key\/pair&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_apply", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::apply", "doc": "&quot;Apply a callback to every element of the collection&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_filter", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::filter", "doc": "&quot;Filter the current collection by a user-defined function&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_first", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::first", "doc": "&quot;Return first element matching criteria&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_last", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::last", "doc": "&quot;Return last element matching criteria&quot;"},
            
            {"type": "Interface", "fromName": "StandardLibrary\\Contracts\\Type", "fromLink": "StandardLibrary/Contracts/Type.html", "link": "StandardLibrary/Contracts/Type/EnumType.html", "name": "StandardLibrary\\Contracts\\Type\\EnumType", "doc": "&quot;Enum type&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\EnumType", "fromLink": "StandardLibrary/Contracts/Type/EnumType.html", "link": "StandardLibrary/Contracts/Type/EnumType.html#method_getValue", "name": "StandardLibrary\\Contracts\\Type\\EnumType::getValue", "doc": "&quot;Get the value of the ENUM&quot;"},
            
            {"type": "Interface", "fromName": "StandardLibrary\\Contracts\\Type", "fromLink": "StandardLibrary/Contracts/Type.html", "link": "StandardLibrary/Contracts/Type/ImmutableType.html", "name": "StandardLibrary\\Contracts\\Type\\ImmutableType", "doc": "&quot;Immutable Type&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\ImmutableType", "fromLink": "StandardLibrary/Contracts/Type/ImmutableType.html", "link": "StandardLibrary/Contracts/Type/ImmutableType.html#method___set", "name": "StandardLibrary\\Contracts\\Type\\ImmutableType::__set", "doc": "&quot;Prevent setting properties&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\ImmutableType", "fromLink": "StandardLibrary/Contracts/Type/ImmutableType.html", "link": "StandardLibrary/Contracts/Type/ImmutableType.html#method___unset", "name": "StandardLibrary\\Contracts\\Type\\ImmutableType::__unset", "doc": "&quot;Prevent unsetting of properties&quot;"},
            
            {"type": "Interface", "fromName": "StandardLibrary\\Contracts\\Type", "fromLink": "StandardLibrary/Contracts/Type.html", "link": "StandardLibrary/Contracts/Type/Type.html", "name": "StandardLibrary\\Contracts\\Type\\Type", "doc": "&quot;Type interface&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\Type", "fromLink": "StandardLibrary/Contracts/Type/Type.html", "link": "StandardLibrary/Contracts/Type/Type.html#method_getType", "name": "StandardLibrary\\Contracts\\Type\\Type::getType", "doc": "&quot;Returns a description of the object&quot;"},
            
            
            {"type": "Class", "fromName": "StandardLibrary", "fromLink": "StandardLibrary.html", "link": "StandardLibrary/Collection.html", "name": "StandardLibrary\\Collection", "doc": "&quot;Collection&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_getType", "name": "StandardLibrary\\Collection::getType", "doc": "&quot;Returns the type of the object&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method___construct", "name": "StandardLibrary\\Collection::__construct", "doc": "&quot;Create a new Collection from an array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_toArray", "name": "StandardLibrary\\Collection::toArray", "doc": "&quot;Return collection as a PHP native array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_apply", "name": "StandardLibrary\\Collection::apply", "doc": "&quot;Apply a callback to every element of the collection&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_filter", "name": "StandardLibrary\\Collection::filter", "doc": "&quot;Filter the current collection by a user-defined function&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_first", "name": "StandardLibrary\\Collection::first", "doc": "&quot;Return first element matching criteria&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_last", "name": "StandardLibrary\\Collection::last", "doc": "&quot;Return last element matching criteria&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_reverse", "name": "StandardLibrary\\Collection::reverse", "doc": "&quot;Reverse order of the Collection&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_set", "name": "StandardLibrary\\Collection::set", "doc": "&quot;Sets a key\/pair value&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_get", "name": "StandardLibrary\\Collection::get", "doc": "&quot;Get a value&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_exists", "name": "StandardLibrary\\Collection::exists", "doc": "&quot;Check that an offset, or series of offsets exists&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_delete", "name": "StandardLibrary\\Collection::delete", "doc": "&quot;Deletes a key\/pair&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_offsetSet", "name": "StandardLibrary\\Collection::offsetSet", "doc": "&quot;Set offset&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_offsetUnset", "name": "StandardLibrary\\Collection::offsetUnset", "doc": "&quot;Unset offset&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_offsetExists", "name": "StandardLibrary\\Collection::offsetExists", "doc": "&quot;Check that a offset exists&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_offsetGet", "name": "StandardLibrary\\Collection::offsetGet", "doc": "&quot;Return value&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_count", "name": "StandardLibrary\\Collection::count", "doc": "&quot;Counts the items in the set&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_peek", "name": "StandardLibrary\\Collection::peek", "doc": "&quot;Get the next element (look-ahead)&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_current", "name": "StandardLibrary\\Collection::current", "doc": "&quot;Get the current value&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_key", "name": "StandardLibrary\\Collection::key", "doc": "&quot;Get the current key&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_next", "name": "StandardLibrary\\Collection::next", "doc": "&quot;Advance pointer forward&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_rewind", "name": "StandardLibrary\\Collection::rewind", "doc": "&quot;Rewind pointer&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_valid", "name": "StandardLibrary\\Collection::valid", "doc": "&quot;Checks if the set containts anymore elements&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_getIterator", "name": "StandardLibrary\\Collection::getIterator", "doc": "&quot;Return an iterator&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_serialize", "name": "StandardLibrary\\Collection::serialize", "doc": "&quot;Serialize&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Collection", "fromLink": "StandardLibrary/Collection.html", "link": "StandardLibrary/Collection.html#method_unserialize", "name": "StandardLibrary\\Collection::unserialize", "doc": "&quot;unserialize&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Contracts", "fromLink": "StandardLibrary/Contracts.html", "link": "StandardLibrary/Contracts/CastsToString.html", "name": "StandardLibrary\\Contracts\\CastsToString", "doc": "&quot;Interface for casting objects to a string&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\CastsToString", "fromLink": "StandardLibrary/Contracts/CastsToString.html", "link": "StandardLibrary/Contracts/CastsToString.html#method___toString", "name": "StandardLibrary\\Contracts\\CastsToString::__toString", "doc": "&quot;Cast to string&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Contracts", "fromLink": "StandardLibrary/Contracts.html", "link": "StandardLibrary/Contracts/Sortable.html", "name": "StandardLibrary\\Contracts\\Sortable", "doc": "&quot;Contract describing that an object can be sorted&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Sortable", "fromLink": "StandardLibrary/Contracts/Sortable.html", "link": "StandardLibrary/Contracts/Sortable.html#method_sort", "name": "StandardLibrary\\Contracts\\Sortable::sort", "doc": "&quot;Sort an object&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Contracts", "fromLink": "StandardLibrary/Contracts.html", "link": "StandardLibrary/Contracts/TypeEquality.html", "name": "StandardLibrary\\Contracts\\TypeEquality", "doc": "&quot;Compare equality between two {@link Type} objects&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\TypeEquality", "fromLink": "StandardLibrary/Contracts/TypeEquality.html", "link": "StandardLibrary/Contracts/TypeEquality.html#method_equals", "name": "StandardLibrary\\Contracts\\TypeEquality::equals", "doc": "&quot;Compare two {@link Type} objects&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Contracts\\Type", "fromLink": "StandardLibrary/Contracts/Type.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html", "name": "StandardLibrary\\Contracts\\Type\\CollectionType", "doc": "&quot;Collection type interface&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_toArray", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::toArray", "doc": "&quot;Return collection as a PHP native array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_set", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::set", "doc": "&quot;Sets a key\/pair value&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_get", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::get", "doc": "&quot;Get a value&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_exists", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::exists", "doc": "&quot;Check that an offset exists&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_delete", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::delete", "doc": "&quot;Deletes a key\/pair&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_apply", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::apply", "doc": "&quot;Apply a callback to every element of the collection&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_filter", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::filter", "doc": "&quot;Filter the current collection by a user-defined function&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_first", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::first", "doc": "&quot;Return first element matching criteria&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\CollectionType", "fromLink": "StandardLibrary/Contracts/Type/CollectionType.html", "link": "StandardLibrary/Contracts/Type/CollectionType.html#method_last", "name": "StandardLibrary\\Contracts\\Type\\CollectionType::last", "doc": "&quot;Return last element matching criteria&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Contracts\\Type", "fromLink": "StandardLibrary/Contracts/Type.html", "link": "StandardLibrary/Contracts/Type/EnumType.html", "name": "StandardLibrary\\Contracts\\Type\\EnumType", "doc": "&quot;Enum type&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\EnumType", "fromLink": "StandardLibrary/Contracts/Type/EnumType.html", "link": "StandardLibrary/Contracts/Type/EnumType.html#method_getValue", "name": "StandardLibrary\\Contracts\\Type\\EnumType::getValue", "doc": "&quot;Get the value of the ENUM&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Contracts\\Type", "fromLink": "StandardLibrary/Contracts/Type.html", "link": "StandardLibrary/Contracts/Type/ImmutableType.html", "name": "StandardLibrary\\Contracts\\Type\\ImmutableType", "doc": "&quot;Immutable Type&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\ImmutableType", "fromLink": "StandardLibrary/Contracts/Type/ImmutableType.html", "link": "StandardLibrary/Contracts/Type/ImmutableType.html#method___set", "name": "StandardLibrary\\Contracts\\Type\\ImmutableType::__set", "doc": "&quot;Prevent setting properties&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\ImmutableType", "fromLink": "StandardLibrary/Contracts/Type/ImmutableType.html", "link": "StandardLibrary/Contracts/Type/ImmutableType.html#method___unset", "name": "StandardLibrary\\Contracts\\Type\\ImmutableType::__unset", "doc": "&quot;Prevent unsetting of properties&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Contracts\\Type", "fromLink": "StandardLibrary/Contracts/Type.html", "link": "StandardLibrary/Contracts/Type/Type.html", "name": "StandardLibrary\\Contracts\\Type\\Type", "doc": "&quot;Type interface&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Contracts\\Type\\Type", "fromLink": "StandardLibrary/Contracts/Type/Type.html", "link": "StandardLibrary/Contracts/Type/Type.html#method_getType", "name": "StandardLibrary\\Contracts\\Type\\Type::getType", "doc": "&quot;Returns a description of the object&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary", "fromLink": "StandardLibrary.html", "link": "StandardLibrary/Enum.html", "name": "StandardLibrary\\Enum", "doc": "&quot;Eum class&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Enum", "fromLink": "StandardLibrary/Enum.html", "link": "StandardLibrary/Enum.html#method___construct", "name": "StandardLibrary\\Enum::__construct", "doc": "&quot;Construct a new ENUM object&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Enum", "fromLink": "StandardLibrary/Enum.html", "link": "StandardLibrary/Enum.html#method___callStatic", "name": "StandardLibrary\\Enum::__callStatic", "doc": "&quot;Call a static method to construct a new enum&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Enum", "fromLink": "StandardLibrary/Enum.html", "link": "StandardLibrary/Enum.html#method_getValue", "name": "StandardLibrary\\Enum::getValue", "doc": "&quot;Returns the value of the ENUM&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Enum", "fromLink": "StandardLibrary/Enum.html", "link": "StandardLibrary/Enum.html#method_getType", "name": "StandardLibrary\\Enum::getType", "doc": "&quot;Returns the type of the ENUM&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Enums", "fromLink": "StandardLibrary/Enums.html", "link": "StandardLibrary/Enums/Agreement.html", "name": "StandardLibrary\\Enums\\Agreement", "doc": "&quot;Example of an enum allowing choice between two values&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Enums\\Agreement", "fromLink": "StandardLibrary/Enums/Agreement.html", "link": "StandardLibrary/Enums/Agreement.html#method_getType", "name": "StandardLibrary\\Enums\\Agreement::getType", "doc": "&quot;Returns the type of this enum&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Enums\\Agreement", "fromLink": "StandardLibrary/Enums/Agreement.html", "link": "StandardLibrary/Enums/Agreement.html#method___toString", "name": "StandardLibrary\\Enums\\Agreement::__toString", "doc": "&quot;Allows the object to be cast to a string&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Enums", "fromLink": "StandardLibrary/Enums.html", "link": "StandardLibrary/Enums/Boolean.html", "name": "StandardLibrary\\Enums\\Boolean", "doc": "&quot;Example of an enum enforcing boolean values&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Enums\\Boolean", "fromLink": "StandardLibrary/Enums/Boolean.html", "link": "StandardLibrary/Enums/Boolean.html#method_getType", "name": "StandardLibrary\\Enums\\Boolean::getType", "doc": "&quot;Returns the type of this enum&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary\\Exceptions", "fromLink": "StandardLibrary/Exceptions.html", "link": "StandardLibrary/Exceptions/ImmutableMethodCallException.html", "name": "StandardLibrary\\Exceptions\\ImmutableMethodCallException", "doc": "&quot;Exception thown when trying to mutate an immutable object&quot;"},
                    
            {"type": "Class", "fromName": "StandardLibrary\\Exceptions", "fromLink": "StandardLibrary/Exceptions.html", "link": "StandardLibrary/Exceptions/InvalidEnumValueException.html", "name": "StandardLibrary\\Exceptions\\InvalidEnumValueException", "doc": "&quot;Exception for invalid ENUM values&quot;"},
                    
            {"type": "Trait", "fromName": "StandardLibrary\\Helpers", "fromLink": "StandardLibrary/Helpers.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "doc": "&quot;Array functions&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_getData", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::getData", "doc": "&quot;Return the underlying data&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_setData", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::setData", "doc": "&quot;Sets the underlying data&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_flip", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::flip", "doc": "&quot;Flip the key\/values in an array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_keys", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::keys", "doc": "&quot;Returns all the keys in an array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_pad", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::pad", "doc": "&quot;Pads out an array to a specified length&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_pop", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::pop", "doc": "&quot;Remove the last element of an array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_product", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::product", "doc": "&quot;Calculate product of an array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_shift", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::shift", "doc": "&quot;Remove element from front of the array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_sum", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::sum", "doc": "&quot;Calculate sum of array elements&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_unshift", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::unshift", "doc": "&quot;Add one or more elements to the front of the array&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods", "fromLink": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html", "link": "StandardLibrary/Helpers/ArrayFunctionsHelperMethods.html#method_values", "name": "StandardLibrary\\Helpers\\ArrayFunctionsHelperMethods::values", "doc": "&quot;Return just the values from the array&quot;"},
            
            {"type": "Trait", "fromName": "StandardLibrary\\Helpers", "fromLink": "StandardLibrary/Helpers.html", "link": "StandardLibrary/Helpers/ImmutableArrayHelperMethods.html", "name": "StandardLibrary\\Helpers\\ImmutableArrayHelperMethods", "doc": "&quot;Helper trait to implement immutable arrays&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ImmutableArrayHelperMethods", "fromLink": "StandardLibrary/Helpers/ImmutableArrayHelperMethods.html", "link": "StandardLibrary/Helpers/ImmutableArrayHelperMethods.html#method_offsetSet", "name": "StandardLibrary\\Helpers\\ImmutableArrayHelperMethods::offsetSet", "doc": "&quot;Prevent implicit setting of properties&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ImmutableArrayHelperMethods", "fromLink": "StandardLibrary/Helpers/ImmutableArrayHelperMethods.html", "link": "StandardLibrary/Helpers/ImmutableArrayHelperMethods.html#method_offsetUnset", "name": "StandardLibrary\\Helpers\\ImmutableArrayHelperMethods::offsetUnset", "doc": "&quot;Prevent implicit unsetting of properties&quot;"},
            
            {"type": "Trait", "fromName": "StandardLibrary\\Helpers", "fromLink": "StandardLibrary/Helpers.html", "link": "StandardLibrary/Helpers/ImmutableObjectHelperMethods.html", "name": "StandardLibrary\\Helpers\\ImmutableObjectHelperMethods", "doc": "&quot;Helper trait to implement immutable objects&quot;"},
                                                        {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ImmutableObjectHelperMethods", "fromLink": "StandardLibrary/Helpers/ImmutableObjectHelperMethods.html", "link": "StandardLibrary/Helpers/ImmutableObjectHelperMethods.html#method___set", "name": "StandardLibrary\\Helpers\\ImmutableObjectHelperMethods::__set", "doc": "&quot;Prevent implicit setting of properties&quot;"},
                    {"type": "Method", "fromName": "StandardLibrary\\Helpers\\ImmutableObjectHelperMethods", "fromLink": "StandardLibrary/Helpers/ImmutableObjectHelperMethods.html", "link": "StandardLibrary/Helpers/ImmutableObjectHelperMethods.html#method___unset", "name": "StandardLibrary\\Helpers\\ImmutableObjectHelperMethods::__unset", "doc": "&quot;Prevent implicit unsetting of properties&quot;"},
            
            {"type": "Class", "fromName": "StandardLibrary", "fromLink": "StandardLibrary.html", "link": "StandardLibrary/ImmutableArrayTypeObject.html", "name": "StandardLibrary\\ImmutableArrayTypeObject", "doc": "&quot;Immutable ArrayType object&quot;"},
                    
            {"type": "Class", "fromName": "StandardLibrary", "fromLink": "StandardLibrary.html", "link": "StandardLibrary/ImmutableObject.html", "name": "StandardLibrary\\ImmutableObject", "doc": "&quot;Immutable object&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


